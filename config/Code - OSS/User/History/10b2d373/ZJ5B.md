# BASE EFI Intel Raptor Lake

- Opencore version: 0.9.2
- Release date: 08/05/2023 (delayed a week)

# Basic Steps

1. [Download](https://github.com/luchina-gabriel/BASE-EFI-INTEL-DESKTOP-13THGEN-RAPTOR-LAKE/releases) the latest release;
2. Includes **additional** kexts (for ethernet, audio, etc);
   1. 6650?
3. Include the **necessary** ACPI patches (.aml);
   1. EFI-ASUS PRIME Z690-A??
4. Review the special notes;
5. Generate and complete your SMBIOS infos - **ALWAYS**;
6. Adjust your BIOS;
7. Install macOS and enjoy :)

# Kexts included (**Required**)
Kext|Description
:----|:----
[Lilu.kext](https://github.com/acidanthera/Lilu/releases)|Patch many processes, required for AppleALC, WhateverGreen, VirtualSMC and many other kexts.
[SMCProcessor.kext](https://github.com/acidanthera/VirtualSMC/releases)|Used for monitoring CPU temperature, doesn't work on AMD CPU based systems.
[SMCSuperIO.kext](https://github.com/acidanthera/VirtualSMC/releases)|Used for monitoring fan speed, doesn't work on AMD CPU based systems.
[VirtualSMC.kext](https://github.com/acidanthera/VirtualSMC/releases)|Emulates the SMC chip found on real macs, without this macOS will not boot.<br>Alternative is FakeSMC which can have better or worse support, most commonly used on legacy hardware.
[WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases)|Used for graphics patching, DRM fixes, board ID checks, framebuffer fixes, etc; all GPUs benefit from this kext.

# Other Kexts (not included)

Kexts for support Audio, Wifi, Ethernets and other devices.

### Audio

Kext|Description
:----|:----
[AppleALC.kext](https://github.com/acidanthera/AppleALC/releases)|Used for AppleHDA patching, allowing support for the majority of on-board sound controllers.<br>AMD 15h/16h may have issues with this and Ryzen/Threadripper systems rarely have mic support.
[VoodooHDA.kext](https://sourceforge.net/projects/voodoohda/)|Audio for FX systems and front panel Mic+Audio support for Ryzen system, do not mix with AppleALC.<br>Audio quality is noticeably worse than AppleALC on Zen CPUs.

### Ethernet
Kext|Description
:----|:----
[IntelMausi.kext](https://github.com/acidanthera/IntelMausi/releases)|Intel's 82578, 82579, I217, I218 and I219 NICs are officially supported.
[AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet/releases)|Required for Atheros and Killer NICs.<br>**Note**: Atheros Killer E2500 models are actually Realtek based, for these systems please use RealtekRTL8111 instead.
[RealtekRTL8111.kext](https://github.com/Mieze/RTL8111_driver_for_OS_X/releases)|For Realtek's Gigabit Ethernet.<br>Sometimes the latest version of the kext might not work properly with your Ethernet. If you see this issue, try older versions.
[LucyRTL8125Ethernet.kext](https://www.insanelymac.com/forum/files/file/1004-lucyrtl8125ethernet/)|For Realtek's 2.5Gb Ethernet.
[SmallTreeIntel82576.kext](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)| Required for I211 NICs, based off of the SmallTree kext but patched to support I211.<br>Required for most AMD boards running Intel NICs.
[AppleIGB.kext](https://github.com/donatengit/AppleIGB/releases)|Required for I211 NICs running on macOS Monterey and above. Might have instability issues on some NICs, recommended to stay on Big Sur and use SmallTree. Requires macOS 12 and above

### WiFi and Bluetooth
Kext|Description
:----|:----
[AirportItlwm](https://github.com/OpenIntelWireless/itlwm/releases)|Adds support for a large variety of Intel wireless cards and works natively in recovery thanks to IO80211Family integration.
[IntelBluetoothFirmware](https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases)|Adds Bluetooth support to macOS when paired with an Intel wireless card.
[AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)|Used for patching non-Apple/non-Fenvi Broadcom cards, will not work on Intel, Killer, Realtek, etc.<br>For Big Sur see [Big Sur Known Issues](https://dortania.github.io/OpenCore-Install-Guide/extras/big-sur#known-issues) for extra steps regarding AirPortBrcm4360 drivers.
[BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)|Used for uploading firmware on Broadcom Bluetooth chipset, required for all non-Apple/non-Fenvi Airport cards.

### USB
Kext|Description
:----|:----
[USBInjectAll](https://github.com/daliansky/OS-X-USB-Inject-All/releases)|Used for injecting Intel USB controllers on systems without defined USB ports in ACPI.<br>All Intel chipset series.<br>Requires OS X 10.11 or newer.
[XHCI-unsupported](https://github.com/daliansky/OS-X-USB-Inject-All/archive/refs/heads/master.zip)|Needed for non-native USB controllers.<br>Common chipsets needing this: H370, B360, H310, Z390(Not needed on Mojave and newer), X79, X99, AsRock boards(On Intel motherboards specifically, B460/Z490+ boards do not need it however).

### Others
Kext|Description
:----|:----
[NVMeFix](https://github.com/acidanthera/NVMeFix/releases)|Used for fixing power management and initialization on non-Apple NVMe.
[SATA-Unsupported](https://github.com/khronokernel/Legacy-Kexts/blob/master/Injectors/Zip/SATA-unsupported.kext.zip)|Adds support for a large variety of SATA controllers, mainly relevant for laptops which have issues seeing the SATA drive in macOS.<br>We recommend testing without this first.
[RestrictEvents](https://github.com/acidanthera/RestrictEvents/releases)|Better experience with unsupported processors like AMD, Disable MacPro7,1 memory warnings and provide upgrade to macOS Monterey via Software Updates when available.
[CpuTscSync](https://github.com/acidanthera/CpuTscSync/releases)|It is a Lilu plugin, combining functionality of VoodooTSCSync and disabling xcpm_urgency if TSC is not in sync. It should solve some kernel panics after wake.

# ACPI Tables

These files are **MUST** be included in your EFI's ACPI directory. We recommend that you use the **MANUAL** method, but for a first test you can use the prebuild versions.

Table|Description
:----|:----
SSDT-PLUG-ALT|[Manual](https://dortania.github.io/Getting-Started-With-ACPI/Universal/plug-methods/manual.html) \| [Prebuilt](https://github.com/luchina-gabriel/youtube-files/raw/main/SSDT-PLUG-ALT.aml) \| [Details](https://dortania.github.io/Getting-Started-With-ACPI/Universal/plug.html)
SSDT-EC-USBX|[Manual](https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-methods/manual.html) \| [Prebuilt](https://github.com/dortania/Getting-Started-With-ACPI/raw/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml) \| [Details](https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html)
SSDT-AWAC|[Manual](https://dortania.github.io/Getting-Started-With-ACPI/Universal/awac-methods/manual.html) \| [Prebuilt](https://github.com/dortania/Getting-Started-With-ACPI/raw/master/extra-files/compiled/SSDT-AWAC.aml) \| [Details](https://dortania.github.io/Getting-Started-With-ACPI/Universal/awac.html)
SSDT-RHUB|[Manual](https://dortania.github.io/Getting-Started-With-ACPI/Universal/rhub-methods/manual.html) \| [Prebuilt](https://github.com/luchina-gabriel/youtube-files/raw/main/SSDT-RHUB.aml) \| [Details](https://dortania.github.io/Getting-Started-With-ACPI/Universal/rhub.html)

### Dumping your DSDT in Windows Environment
[Download iASL Compiler ACPI Tools](https://acpica.org/downloads/binary-tools)
<br><br>
Open the CMD in the directory where the *ACPI Tools* was extracted. (*Command Prompt*) in **Administrator Mode**:
```
path/to/acpidump.exe -b -n DSDT -z
move dsdt.dat DSDT.aml
```

Decompile DSDT.aml:
```
path/to/iasl.exe path/to/DSDT.aml
```
*File DSDT.dsl will generated. Use this for generate YOUR ACPI Patches.* 

Compile DSDT.dsl:
```
path/to/iasl.exe path/to/DSDT.dsl
```
*File APCPI_FILE_PATCHED.aml will generated.*

# Attention

Update **config.plist** in PlatformInfo > Generic with YOUR informations, for that use [*genSMBIOS*](https://github.com/corpnewt/GenSMBIOS/) [download](https://github.com/corpnewt/GenSMBIOS/archive/refs/heads/master.zip) for generate values for above itens.
<br>
```
git clone https://github.com/corpnewt/GenSMBIOS
cd GenSMBIOS
chmod +x GenSMBIOS.command
./GenSMBIOS.command
```
2.
/home/n30/Downloads/EFI/OC/config.plist

3. MacPro7,1 1
Type:         MacPro7,1
Serial:       F5KCVUZDP7QM
Board Serial: F5K024701GUK3F7CB
SmUUID:       2EDE3F11-AD8A-43DD-B1DF-5B355C5CB1DE
Apple ROM:    AC87A398450F

deprecated:
4.
518AFD78-BAE2-451E-B5FA-D49F43B8644E
5.Apple ROM: 
9C35EBADD28E


Please use [*ProperTree*](https://github.com/corpnewt/ProperTree/archive/refs/heads/master.zip) for configure/edit your config.plist.

# Compatible SMBIOS

SMBIOS|Description
:----|:----
MacPro7,1|Because GPU integrated in 13th gen without support for Apple.
iMacPro1,1|Because GPU integrated in 13th gen without support for Apple.

# Catalina and older versions of macOS

- Please configure `MinDate` and `MinVersion` in UEFI > APFS to `-1`;
- Please configure `SecureBootModel` in Misc > Security to `j137`;

\* *Without above settings, macOS will not be able to boot.*

# Special notes

- USB port mapping is **REQUIRED**.
- **`XhciPortLimit`** - Needed **`DISABLE`** if you use Big Sur 11.3+. 
	- Please Mapping USB in macOS Catalina before install Big Sur or Newer for best results.
	- You can use USBMap.command Utility - [USBMap](https://github.com/corpnewt/USBMap).
- **`AppleXcpmCfgLock`** - Please **`ENABLE`** if you cannot disable`CFG-Lock` in BIOS.
- Does NOT SUPPORT iGPU in 13th Gen.
- You NEED dGPU (dedicated/discrete GPU (eg. RX 560, 570, 580, 590, RX 5700 XT, etc).
- **`SetupVirtualMap`** - Please **`ENABLE`** if you stuck in Early boot.

# Special notes [DeviceProperties > Add]

- PLEASE EDIT/ADD DEVICE FOR ETHERNET i225 (You can identify with Hackintool on `PCIe` tab).
	- If your board didn't ship with the Intel I225 NIC, there's no reason to add this entry.
	- If you get a kernel panic on the `AppleIntelI210Ethernet` kext, your Ethernet's path is likely `PciRoot(0x0)/Pci(0x1C,0x4)/Pci(0x0,0x0)`.
	- Please **`ENABLE`** Patch for i225 on `Kernel > Patch`.
	- for macOS Monterey 12.2.1 and below, please add `dk.e1000=0` in `boot-args`.
	- for macOS Monterey 12.3 or newer, please add `e1000=0` in `boot-args`.
	- for macOS Ventura, please add `e1000=0` in `boot-args` and add Kext [AppleIntelI210Ethernet.kext](https://github.com/luchina-gabriel/youtube-files/raw/main/AppleIntelI210Ethernet.kext.zip)

### GPU-Specific `boot-args`
Parameter|Description
:----|:----
agdpmod=pikera|Used for disabling board ID checks on Navi GPUs(RX 5000 series & RX 6000 series), without this you'll get a black screen.<br>**Don't use if you don't have Navi** (ie. Polaris and Vega cards shouldn't use this).

### Ethernet (Intel i225) `boot-args`
Parameter|Description
:----|:----
dk.e1000=0|Disables `com.apple.DriverKit-AppleEthernetE1000` (Apple's DEXT driver) from matching to the Intel I225-V Ethernet controller found on higher end Comet Lake boards, causing Apple's I225 kext driver to load instead.<br>This boot argument is optional on most boards as they are compatible with the DEXT driver. However, it is required on Gigabyte and several other boards, which can only use the kext driver, as the DEXT driver causes hangs.<br>You don't need this if your board didn't ship with the I225-V NIC.
e1000=0|for macOS 12.3.1 or newer<br>Disables `com.apple.DriverKit-AppleEthernetE1000` (Apple's DEXT driver) from matching to the Intel I225-V Ethernet controller found on higher end Comet Lake boards, causing Apple's I225 kext driver to load instead.<br>This boot argument is optional on most boards as they are compatible with the DEXT driver. However, it is required on Gigabyte and several other boards, which can only use the kext driver, as the DEXT driver causes hangs.<br>You don't need this if your board didn't ship with the I225-V NIC.

# BIOS Settings

### Disable
- Fast Boot
- Secure Boot
- Serial/COM Port
- Parallel Port
- VT-d (can be enabled if you set `DisableIoMapper` to YES)
- Compatibility Support Module (CSM).
- Thunderbolt(For initial install, as Thunderbolt can cause issues if not setup correctly)
- Intel SGX
- Intel Platform Trust
- CFG Lock (MSR 0xE2 write protection)
	- This must be off, if you can't find the option then **`ENABLE`** `AppleXcpmCfgLock`. 
	- Your hack will not boot with `CFG-Lock` enabled.

### Enable
- VT-x
- Above 4G decoding. 
	- This must be on, if you can't find the option then add `npci=0x2000` to `boot-args`. 
	- Do not have both this option and `npci` on `boot-args` enabled at the same time.
	- When enabling Above4G, Resizable BAR Support may become an available on some motherboards. Please ensure this is **`DISABLED`** instead of set to Auto.
- Hyper-Threading
- Execute Disable Bit
- EHCI/XHCI Hand-off
- OS type: Windows 8.1/10 UEFI Mode
- SATA Mode: AHCI

# References
https://dortania.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html
<br>
https://dortania.github.io/Getting-Started-With-ACPI/

## Discord - Universo Hackintosh
- [Access Discord](https://discord.universohackintosh.com.br)
