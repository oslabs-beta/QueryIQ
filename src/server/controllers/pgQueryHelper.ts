export const pgQueryHelper = (userQuery: string, datasourceUID: string) => {
  const queryPanels = {
    __inputs: [
      {
        name: 'Query',
        label: 'Query',
        description: '',
        type: 'datasource',
        pluginId: 'postgres',
        pluginName: 'PostgreSQL',
      },
    ],
    __elements: {},
    __requires: [
      {
        type: 'panel',
        id: 'barchart',
        name: 'Bar chart',
        version: '',
      },
      {
        type: 'panel',
        id: 'bargauge',
        name: 'Bar gauge',
        version: '',
      },
      {
        type: 'grafana',
        id: 'grafana',
        name: 'Grafana',
        version: '10.0.1',
      },
      {
        type: 'datasource',
        id: 'postgres',
        name: 'PostgreSQL',
        version: '1.0.0',
      },
      {
        type: 'panel',
        id: 'table',
        name: 'Table',
        version: '',
      },
    ],
    annotations: {
      list: [
        {
          builtIn: 1,
          datasource: {
            type: 'grafana',
            uid: '-- Grafana --',
          },
          enable: true,
          hide: true,
          iconColor: 'rgba(0, 211, 255, 1)',
          name: 'Annotations & Alerts',
          type: 'dashboard',
        },
      ],
    },
    editable: true,
    fiscalYearStartMonth: 0,
    graphTooltip: 0,
    id: null,
    links: [],
    liveNow: false,
    panels: [
      {
        datasource: {
          type: 'postgres',
          uid: `${datasourceUID}`,
        },
        description:
          'The following data is from EXPLAIN ANALYZE, which provides execution plan and performance query for specific query input including: \n\nNode Type: The type of node or operation being performed, such as "Seq Scan," "Index Scan," "Hash Join," etc.\n\nRelation Name: The name of the relation or table being accessed.\n\nStartup Cost: The estimated cost of starting up the operation.\n\nTotal Cost: The estimated total cost of executing the operation.\n\nRows: The estimated number of rows output by the operation.\n\nWidth: The estimated average width of each row in bytes.\n\nActual Startup Time: The actual time spent on starting up the operation during execution.\n\nActual Total Time: The actual total time taken to execute the operation.\n\nActual Rows: The actual number of rows output by the operation during execution.\n\nActual Loops: The number of times the operation was executed (loops) during execution.\n\nThese are some of the common data types provided by EXPLAIN ANALYZE. The actual values and additional columns may vary depending on the specific query, the execution plan, and the available statistics.',
        fieldConfig: {
          defaults: {
            custom: {
              align: 'auto',
              cellOptions: {
                type: 'auto',
              },
              inspect: false,
            },
            mappings: [],
            thresholds: {
              mode: 'absolute',
              steps: [
                {
                  color: 'green',
                  value: null,
                },
                {
                  color: 'red',
                  value: 80,
                },
              ],
            },
            unit: 's',
          },
          overrides: [],
        },
        gridPos: {
          h: 8,
          w: 8,
          x: 0,
          y: 0,
        },
        id: 2,
        options: {
          cellHeight: 'md',
          footer: {
            countRows: false,
            fields: '',
            reducer: ['sum'],
            show: false,
          },
          showHeader: true,
        },
        pluginVersion: '10.0.1',
        targets: [
          {
            datasource: {
              type: 'postgres',
              uid: `${datasourceUID}`,
            },
            editorMode: 'code',
            format: 'table',
            rawQuery: true,
            rawSql: `EXPLAIN ANALYZE ${userQuery};`,
            refId: 'A',
            sql: {
              columns: [
                {
                  parameters: [],
                  type: 'function',
                },
              ],
              groupBy: [
                {
                  property: {
                    type: 'string',
                  },
                  type: 'groupBy',
                },
              ],
              limit: 50,
            },
          },
        ],
        title: 'Query Performance Metrics ',
        type: 'table',
      },
      {
        datasource: {
          type: 'postgres',
          uid: `${datasourceUID}`,
        },
        description:
          'This chart displays the total execution time in seconds. Total execution time measures the time taken to both planning and execution of the query. Query calls refer to the number of times a particular query has been executed since the pg_stat_statements extension was enabled or since the statistics were last reset.',
        fieldConfig: {
          defaults: {
            color: {
              mode: 'continuous-BlYlRd',
            },
            custom: {
              axisCenteredZero: false,
              axisColorMode: 'text',
              axisLabel: '',
              axisPlacement: 'auto',
              fillOpacity: 80,
              gradientMode: 'hue',
              hideFrom: {
                legend: false,
                tooltip: false,
                viz: false,
              },
              lineWidth: 1,
              scaleDistribution: {
                type: 'linear',
              },
              thresholdsStyle: {
                mode: 'off',
              },
            },
            mappings: [],
            thresholds: {
              mode: 'absolute',
              steps: [
                {
                  color: 'green',
                  value: null,
                },
                {
                  color: 'red',
                  value: 80,
                },
              ],
            },
            unit: 's',
          },
          overrides: [],
        },
        gridPos: {
          h: 8,
          w: 9,
          x: 8,
          y: 0,
        },
        id: 3,
        options: {
          barRadius: 0,
          barWidth: 0.97,
          fullHighlight: false,
          groupWidth: 0.7,
          legend: {
            calcs: [],
            displayMode: 'list',
            placement: 'right',
            showLegend: true,
          },
          orientation: 'auto',
          showValue: 'never',
          stacking: 'none',
          tooltip: {
            mode: 'single',
            sort: 'none',
          },
          xTickLabelRotation: 0,
          xTickLabelSpacing: 0,
        },
        pluginVersion: '10.0.1',
        targets: [
          {
            datasource: {
              type: 'postgres',
              uid: `${datasourceUID}`,
            },
            editorMode: 'code',
            format: 'table',
            rawQuery: true,
            rawSql: `SELECT total_exec_time, calls, query FROM pg_stat_statements\nWHERE query LIKE '%${userQuery}%'\n AND query NOT LIKE '%EXPLAIN%';`,
            refId: 'A',
            sql: {
              columns: [
                {
                  parameters: [],
                  type: 'function',
                },
              ],
              groupBy: [
                {
                  property: {
                    type: 'string',
                  },
                  type: 'groupBy',
                },
              ],
              limit: 50,
            },
          },
        ],
        title: 'Total Execution Time and Calls',
        type: 'barchart',
      },
      {
        datasource: {
          type: 'postgres',
          uid: `${datasourceUID}`,
        },
        description:
          'This chart displays shared buffer hits and shared buffer read measured in bigInt. Shared buffer hits represents the number of shared buffer hits. The shared buffer in PostgreSQL is a cache area in memory where frequently accessed data blocks from the database are stored. Therefore, this number indicates the efficiency of cache utilization for the given query. Higher values for shared buffer hits suggest that the data blocks required by the query are frequently found in the shared buffer, resulting in improved performance.\n\nHigher values for shared buffer read suggest that the query required data blocks that were not present in the shared buffer, leading to disk reads. In general, minimizing disk reads by maximizing shared buffer hits shared buffer hits is beneficial for query performance.',
        fieldConfig: {
          defaults: {
            color: {
              mode: 'continuous-BlYlRd',
            },
            mappings: [],
            thresholds: {
              mode: 'absolute',
              steps: [
                {
                  color: 'green',
                  value: null,
                },
                {
                  color: 'red',
                  value: 80,
                },
              ],
            },
            unit: 'bytes',
          },
          overrides: [],
        },
        gridPos: {
          h: 9,
          w: 8,
          x: 0,
          y: 8,
        },
        id: 4,
        options: {
          displayMode: 'gradient',
          minVizHeight: 10,
          minVizWidth: 0,
          orientation: 'horizontal',
          reduceOptions: {
            calcs: ['lastNotNull'],
            fields: '',
            values: false,
          },
          showUnfilled: true,
          valueMode: 'color',
        },
        pluginVersion: '10.0.1',
        targets: [
          {
            datasource: {
              type: 'postgres',
              uid: `${datasourceUID}`,
            },
            editorMode: 'code',
            format: 'table',
            rawQuery: true,
            rawSql: `SELECT shared_blks_hit AS "Shared Buffer Hits", shared_blks_read AS "Shared Buffer Read" FROM pg_stat_statements\nWHERE query LIKE \'%${userQuery}%\'\n AND query NOT LIKE \'%EXPLAIN%\';`,
            refId: 'A',
            sql: {
              columns: [
                {
                  parameters: [],
                  type: 'function',
                },
              ],
              groupBy: [
                {
                  property: {
                    type: 'string',
                  },
                  type: 'groupBy',
                },
              ],
              limit: 50,
            },
          },
        ],
        title: 'Shared Buffer Hits vs Shared Buffer Read',
        type: 'bargauge',
      },
    ],
    refresh: '',
    schemaVersion: 38,
    style: 'dark',
    tags: [],
    templating: {
      list: [],
    },
    time: {
      from: 'now-6h',
      to: 'now',
    },
    timepicker: {},
    timezone: '',
    title: 'Dashboard for Specific Query Input',
    uid: 'f4ba3118-e74f-45fc-aba4-3d7d95407afd',
    version: 3,
    weekStart: '',
  };
  return queryPanels;
};
