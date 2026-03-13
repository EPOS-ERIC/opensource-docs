---
title: Troubleshooting
---

# Troubleshooting

This page provides solutions to common issues you may encounter while using the EPOS Platform, including the CLI and deployed environments.

## CLI (Command Line Interface)

### Interactive TUI

**Launching TUI vs CLI commands**

- Run `epos-opensource` without arguments to launch the interactive TUI
- Run `epos-opensource --help` to see CLI command syntax
- Press `Esc` or `Ctrl+C` to exit the TUI

**TUI Navigation Tips**

- Arrow keys to navigate menus
- Enter to select/confirm
- Space to toggle checkboxes
- Tab to switch between panels

**Customizing TUI**

The TUI supports custom configuration. See [TUI Configuration](./tui.md) for details.

### `update` vs `docker update`

It is important to distinguish between the top-level `update` command and the `docker update` subcommand:

-   `epos-opensource update`: This command updates the `epos-opensource` CLI tool itself to the latest version.
-   `epos-opensource docker update`: This command is used to reconcile or update a deployed EPOS Platform environment. 

Common problems and solutions when using the `epos-opensource` CLI.

### Docker/Kubernetes not found

-   **Issue:** The CLI reports that Docker or Kubernetes cannot be found.
-   **Solution:** Ensure that Docker is installed, running, and accessible from your terminal. If you are using Kubernetes, make sure `kubectl` is installed and configured correctly to connect to your cluster.

### Environment or Directory Already Exists

-   **Issue:** When creating a new environment, the CLI reports that the environment or directory already exists.
-   **Solution:** Choose a unique name for your new environment. If you intend to replace an old environment, you must first delete it using the appropriate CLI command before creating a new one with the same name.

### Problems with `.ttl` Files

-   **Issue:** The CLI fails to process `.ttl` (Turtle) files during data population.
-   **Solution:** Verify that the directory containing the `.ttl` files exists and that the files are valid. Ensure that the file paths do not contain spaces or special characters that might interfere with processing.

### Environment Not Found

-   **Issue:** The CLI reports that an environment cannot be found, even though it was created previously.
-   **Solution:** The CLI stores environment information in a user-level database. Ensure you are running commands as the same user who created the environment. If you switch users, the environment will not be visible.

### Docker Environment Not Starting Correctly

-   **Issue:** After restarting your machine or the Docker daemon, your EPOS Docker environment does not start up automatically or function as expected.
-   **Solution:** You can manually trigger a restart and reconciliation of the environment by running the `update` command. This will check the environment's state and restart any services that are not running correctly.
    ```bash
    epos-opensource docker update <your-environment-name>
    ```

## Data Population

### Populated Data Not Appearing

-   **Issue:** After populating the system with data, the new information may take a short time to appear in the user interface.
-   **Solution:** This is expected. The platform refreshes its data in the background every so often, so waiting a little is usually enough. If you do not want to wait, you can restart the `resources-service` container:
    ```bash
    docker restart <your-environment-name>-resources-service
    ```
    If the data still does not appear after a short wait or a restart, please open an issue on GitHub.

## Reporting Issues

If you have tried the solutions on this page and are still experiencing problems, please let us know so we can help.

-   **Open a GitHub Issue:** The best way to report a bug or request a feature is by [opening an issue on our GitHub repository](https://github.com/EPOS-ERIC/epos-opensource/issues). Please provide as much detail as possible, including steps to reproduce the issue, error messages, and your system configuration.
