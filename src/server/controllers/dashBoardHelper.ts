export const dashBoardHelper = (uid : string) => {
  const dashboard = {"dashboard": {
    "__inputs": [
      {
        "name": "DvdRentals",
        "label": "DvdRentals",
        "description": "",
        "type": "datasource",
        "pluginId": "postgres",
        "pluginName": "PostgreSQL"
      }
    ],
    "__elements": {},
    "__requires": [
      {
        "type": "panel",
        "id": "barchart",
        "name": "Bar chart",
        "version": ""
      },
      {
        "type": "panel",
        "id": "bargauge",
        "name": "Bar gauge",
        "version": ""
      },
      {
        "type": "panel",
        "id": "gauge",
        "name": "Gauge",
        "version": ""
      },
      {
        "type": "grafana",
        "id": "grafana",
        "name": "Grafana",
        "version": "9.5.3"
      },
      {
        "type": "panel",
        "id": "piechart",
        "name": "Pie chart",
        "version": ""
      },
      {
        "type": "datasource",
        "id": "postgres",
        "name": "PostgreSQL",
        "version": "1.0.0"
      },
      {
        "type": "panel",
        "id": "table",
        "name": "Table",
        "version": ""
      }
    ],
    "annotations": {
      "list": [
        {
          "builtIn": 1,
          "datasource": {
            "type": "grafana",
            "uid": "-- Grafana --"
          },
          "enable": true,
          "hide": true,
          "iconColor": "rgba(0, 211, 255, 1)",
          "name": "Annotations & Alerts",
          "type": "dashboard"
        },
        {
          "datasource": {
            "type": "postgres",
            "uid": `${uid}`
          },
          "enable": true,
          "iconColor": "red",
          "name": "New annotation",
          "target": {
            "editorMode": "code",
            "format": "table",
            "rawSql": "",
            "refId": "Anno",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        }
      ]
    },
    "editable": true,
    "fiscalYearStartMonth": 0,
    "graphTooltip": 0,
    "id": null,
    "links": [],
    "liveNow": false,
    "panels": [
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "thresholds"
            },
            "custom": {
              "align": "auto",
              "cellOptions": {
                "type": "auto"
              },
              "inspect": false,
              "minWidth": 100,
              "width": 100
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 11,
          "x": 0,
          "y": 0
        },
        "id": 7,
        "options": {
          "cellHeight": "sm",
          "footer": {
            "countRows": false,
            "enablePagination": true,
            "fields": "",
            "reducer": [
              "sum"
            ],
            "show": false
          },
          "showHeader": true
        },
        "pluginVersion": "9.5.3",
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT current_database() AS DB_Name,\n       pg_catalog.pg_get_userbyid(datdba) AS admin,\n       pg_catalog.pg_size_pretty(pg_catalog.pg_database_size(current_database())) AS size\nFROM pg_catalog.pg_database\nWHERE datname = current_database();",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Database Info:",
        "type": "table"
      },
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "description": "The PostgreSQL cache area is known as shared_buffers, which acts as the database layer cache on top of the cache provided by the operating system. We can use these metrics to understand the cache hit ratio. We are simply getting the values of hits (from the cache) and reads (from the disk) and calculating the ratio rounded off to four digits. It is important to note that in a healthy production database, this ratio should come to around 97+ or close to it—97% of the hits are coming from the cache.\n\n",
        "fieldConfig": {
          "defaults": {
            "mappings": [],
            "thresholds": {
              "mode": "percentage",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "orange",
                  "value": 70
                },
                {
                  "color": "red",
                  "value": 85
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 11,
          "y": 0
        },
        "id": 6,
        "options": {
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "showThresholdLabels": false,
          "showThresholdMarkers": false
        },
        "pluginVersion": "9.5.3",
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT\n  sum(heap_blks_read) as reads,\n  sum(heap_blks_hit) as hits,\n  ROUND(\n    sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)),\n    4\n  ) as hit_ratio\nFROM\n  pg_statio_user_tables;",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Cache-Hit Ratio",
        "type": "gauge"
      },
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "thresholds"
            },
            "custom": {
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "fillOpacity": 80,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "lineWidth": 1,
              "scaleDistribution": {
                "type": "linear"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            },
            "unit": "short"
          },
          "overrides": []
        },
        "gridPos": {
          "h": 7,
          "w": 11,
          "x": 0,
          "y": 8
        },
        "id": 5,
        "options": {
          "barRadius": 0,
          "barWidth": 0.97,
          "fullHighlight": false,
          "groupWidth": 0.7,
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "orientation": "auto",
          "showValue": "auto",
          "stacking": "none",
          "tooltip": {
            "mode": "single",
            "sort": "none"
          },
          "xTickLabelRotation": 0,
          "xTickLabelSpacing": 0
        },
        "pluginVersion": "9.5.3",
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT\n  datname as database_name,\n  pg_database_size(datname)/1024/1024 as size\nFROM\n  pg_database\nWHERE\n  datistemplate = false;",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Database by Size",
        "type": "barchart"
      },
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-GrYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 7,
          "w": 12,
          "x": 11,
          "y": 8
        },
        "id": 4,
        "options": {
          "displayMode": "basic",
          "minVizHeight": 10,
          "minVizWidth": 0,
          "orientation": "horizontal",
          "reduceOptions": {
            "calcs": [],
            "fields": "",
            "values": true
          },
          "showUnfilled": true,
          "valueMode": "color"
        },
        "pluginVersion": "9.5.3",
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT\n  relname as table_name,\n  reltuples as rows\nFROM\n  pg_class C\n  LEFT JOIN pg_namespace N ON (N.oid = C .relnamespace)\nWHERE\n  nspname NOT IN ('pg_catalog', 'information_schema')\n  AND relkind = 'r'\nORDER BY\n  reltuples DESC;",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Row Counts by Schema Tables",
        "type": "bargauge"
      },
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-GrYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 11,
          "x": 0,
          "y": 15
        },
        "id": 3,
        "options": {
          "displayMode": "basic",
          "minVizHeight": 10,
          "minVizWidth": 0,
          "orientation": "horizontal",
          "reduceOptions": {
            "calcs": [],
            "fields": "",
            "values": true
          },
          "showUnfilled": true,
          "valueMode": "color"
        },
        "pluginVersion": "9.5.3",
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT usename, query, total_exec_time\nFROM pg_stat_statements\nJOIN pg_user ON pg_user.usesysid = pg_stat_statements.userid\nORDER BY total_exec_time DESC\nLIMIT 10;",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Top Slowest Queries by User",
        "type": "bargauge"
      },
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "description": "Measured by (shared_blks_hit + shared_blks_dirtied) calculates the sum of shared_blks_hit and shared_blks_dirtied as shared_block_accesses. This sum represents the total shared block accesses for each query. Including this expression as a separate column allows you to see the calculated value in the query output.",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "palette-classic"
            },
            "custom": {
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              }
            },
            "mappings": []
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 11,
          "y": 15
        },
        "id": 2,
        "options": {
          "displayLabels": [
            "percent"
          ],
          "legend": {
            "displayMode": "list",
            "placement": "right",
            "showLegend": false,
            "values": []
          },
          "pieType": "donut",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT userid::regrole, dbid, query, (shared_blks_hit + shared_blks_dirtied) AS shared_block_accesses\nFROM pg_stat_statements\nORDER BY shared_block_accesses DESC\nLIMIT 10;",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Highest Queries by Memory Usage",
        "type": "piechart"
      },
      {
        "datasource": {
          "type": "postgres",
          "uid": `${uid}`
        },
        "description": "In summary, this metric measures the query column and calculates the average execution time per call for each row in the pg_stat_statements table. It then sorts the remaining rows by the average execution time in descending order, and returns only the top 10 rows.",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-GrYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 11,
          "x": 0,
          "y": 23
        },
        "id": 1,
        "options": {
          "displayMode": "basic",
          "minVizHeight": 10,
          "minVizWidth": 0,
          "orientation": "horizontal",
          "reduceOptions": {
            "calcs": [],
            "fields": "",
            "values": true
          },
          "showUnfilled": true,
          "valueMode": "color"
        },
        "pluginVersion": "9.5.3",
        "targets": [
          {
            "datasource": {
              "type": "postgres",
              "uid": `${uid}`
            },
            "editorMode": "code",
            "format": "table",
            "rawQuery": true,
            "rawSql": "SELECT query,\n       total_exec_time / calls AS avg_exec_time\nFROM pg_stat_statements\nORDER BY avg_exec_time DESC\nLIMIT 10;",
            "refId": "A",
            "sql": {
              "columns": [
                {
                  "parameters": [],
                  "type": "function"
                }
              ],
              "groupBy": [
                {
                  "property": {
                    "type": "string"
                  },
                  "type": "groupBy"
                }
              ],
              "limit": 50
            }
          }
        ],
        "title": "Highest Average Execution Time ",
        "type": "bargauge"
      }
    ],
    "refresh": "",
    "schemaVersion": 38,
    "style": "dark",
    "tags": [],
    "templating": {
      "list": []
    },
    "time": {
      "from": "now-6h",
      "to": "now"
    },
    "timepicker": {},
    "timezone": "",
    "title": "User Created DashBoard",
    "uid": "123467",
    "version": 1,
    "weekStart": ""
  }

  }

  return dashboard;
}