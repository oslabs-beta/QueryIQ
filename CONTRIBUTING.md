## Contributing

The QueryIQ team really appreciates contributions from the community. If you're interested in contributing, please see below:

## How Can I Contribute?
- If you have any suggestions to improve our project, please fork this repository, create a pull request and describe what your contribution or issue is.


## Iteration Roadmap

[] Reimplement data-vis service with home-rolled solution, migrate away from Grafana.
[] Add functionality to connect to more than one database at a time.
[] Add functionality to connect to other types of databases such as MySQL, SQLite.
[] Implement plug-and-play containerization that requires less config.
[] Implement solution that automatically searches for active databases on local machine `nmap -sV localhost -p- | grep ${DB_VENDER}`, or `netstat -an | grep docker` or `ps waux | grep docker`.
[] Integrate Prometheus to allow for time series databases, alerting, and more customization on query and visualization
[WIP] Integrate Open AI as means of suggesting optimized queries, to replace less performant queries
[x] Containerize Grafana, possibly Prometheus, with Docker to enhance overall consistency across environments and operational efficiency
[] Present modal interpretations of performance metrics that succinctly describe the issues and provide actionable recommendations for resolution



