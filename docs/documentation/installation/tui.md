---
title: Terminal User Interface (TUI)
sidebar_position: 5.5
---

# Terminal User Interface (TUI)

The EPOS CLI includes an interactive Terminal User Interface (TUI) built with `tview`. It provides a menu-driven experience for managing Docker and K8s environments without memorizing command syntax.

## Launching the TUI

Run the CLI without arguments to launch the TUI:

```bash
epos-opensource
```

Press `q` or `Ctrl+C` to exit at any time.

At any time, press `?` to open the help menu for the current section.

## Navigation

Full mouse navigation is supported, but if you prefer you can also use the keyboard:

- **Arrow keys/TAB key**: Navigate menus and lists
- **Enter**: Select/open/confirm
- **Esc**: Go back/cancel
- **Ctrl+C**: Exit TUI

## Custom Configuration

You can customize TUI behavior with a user config file.

To create the default config file automatically:

```bash
epos-opensource init-config
```

The file location is platform-specific:

| Platform | Path                                             |
| -------- | ------------------------------------------------ |
| macOS    | `$HOME/.config/epos-opensource.yaml`             |
| Linux    | `$HOME/.config/epos-opensource.yaml`             |
| Windows  | `%APPDATA%\epos-opensource.yaml`                |

### Configuration Options

```yaml
tui:
  # File picker mode: "native" (system dialog) or "tui" (embedded)
  filePickerMode: "native"

  # Platform-specific commands for opening URLs, directories, and files
  openURLCommand: "open" # macOS: "open", Linux: "xdg-open", Windows: "cmd /c start"
  openDirectoryCommand: "open" # macOS: "open", Linux: "xdg-open", Windows: "explorer"
  openFileCommand: "open" # macOS: "open", Linux: "xdg-open", Windows: "explorer"
```

### Example Custom Configuration

If you use `yazi` and `neovim` on Linux:

```yaml
tui:
  filePickerMode: "tui"
  openURLCommand: "xdg-open"
  openDirectoryCommand: "yazi"
  openFileCommand: "nvim"
```

:::tip

The TUI file picker supports two modes:

- **native**: Uses your system's native file dialog
- **tui**: Uses an embedded file browser within the terminal

The native file picker provides better integration with your desktop environment, while the TUI file picker works in headless environments without a display server.

:::

:::caution

The configuration file uses YAML format. Incorrect configuration will fall back to defaults.

:::
