---
title: Terminal User Interface (TUI)
sidebar_position: 5.5
---

# Terminal User Interface (TUI)

The EPOS CLI v1.0.0 introduces an interactive Terminal User Interface (TUI) built with the tview library. This provides a menu-driven experience for managing Docker and Kubernetes deployments without needing to remember command syntax.

## Launching the TUI

Run the CLI without arguments to launch the TUI:

```bash
epos-opensource
```

Press `q` or `Ctrl+C` to exit at any time.

In any moment you can press `?` to open the help menu for the current section. In the help there will be all the keys that you can use and what actions they will do.

## Navigation

Full mouse navigation is supported, but if you prefer you can also use the keyboard:

- **Arrow keys/TAB key**: Navigate menus and lists
- **Enter**: Select/open/confirm
- **Esc**: Go back/cancel
- **Ctrl+C**: Exit TUI

## Custom Configuration

Advanced users can customize TUI behavior by creating a configuration file at the platform-specific path:

| Platform | Path                                             |
| -------- | ------------------------------------------------ |
| macOS    | `$HOME/.config/epos-opensource.yaml`             |
| Linux    | `$HOME/.config/epos-opensource.yaml`             |
| Windows  | `%APPDATA%\epos-opensource\epos-opensource.yaml` |

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

If using yazi and neovim on linux you can use them:

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
