# Plugin Populator

since the whole system is meant to be a live service with the backoffice as the way to update the data in the system, there is no direct way to include plugins in the db as it is created. to do this instead we have developed a simple docker image that runs some commands to read the contents of a deployed environment, with all of the available distributions, and then using a json for describing the plugins, they are ingested in the plugin database using the converter apis. this is a separate component/tool from the main architecture, it is meant just for bootstrapping a system by inserting some plugins at the start. after having deployed a system the backoffice service should be used to manage plugins.

url for the repo with docs:
https://github.com/epos-eu/epos-plugin-populator
