export const testCopy = (uid: string) => {
  const dashboard = {
    dashboard: {
      __inputs: [
        {
          name: 'QueryIQ generated DB',
          label: 'QueryIQ generated DB',
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
          id: 'bargauge',
          name: 'Bar gauge',
          version: '',
        },
        {
          type: 'panel',
          id: 'gauge',
          name: 'Gauge',
          version: '',
        },
        {
          type: 'grafana',
          id: 'grafana',
          name: 'Grafana',
          version: '10.0.1',
        },
        {
          type: 'panel',
          id: 'piechart',
          name: 'Pie chart',
          version: '',
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
          {
            datasource: {
              type: 'postgres',
              uid: uid,
            },
            enable: true,
            iconColor: 'red',
            name: 'New annotation',
            target: {
              editorMode: 'code',
              format: 'table',
              rawSql: '',
              refId: 'Anno',
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
          collapsed: false,
          gridPos: {
            h: 1,
            w: 24,
            x: 0,
            y: 0,
          },
          id: 1,
          panels: [],
          title: 'Database Stats Related to Queries',
          type: 'row',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'This chart identifies the longest running queries by measuring the mean_exec_time.  ',
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
              unit: 'm',
            },
            overrides: [],
          },
          gridPos: {
            h: 8,
            w: 11,
            x: 0,
            y: 1,
          },
          id: 2,
          options: {
            displayMode: 'gradient',
            minVizHeight: 10,
            minVizWidth: 0,
            orientation: 'horizontal',
            reduceOptions: {
              calcs: [],
              fields: '/^mean_exec_time$/',
              values: true,
            },
            showUnfilled: true,
            text: {},
            valueMode: 'color',
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'WITH statements AS (\nSELECT * FROM pg_stat_statements pss\n\t\tJOIN pg_roles pr ON (userid=oid)\nWHERE rolname = current_user\n)\nSELECT calls, \n\tmean_exec_time, \n\tquery\nFROM statements\nWHERE shared_blks_hit > 0\nORDER BY mean_exec_time DESC\nLIMIT 10;\n',
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
          title: 'Top 10 Longest Running Queries',
          transparent: true,
          type: 'bargauge',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'This chart is returning all row counts per table created in the database ',
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
            },
            overrides: [],
          },
          gridPos: {
            h: 8,
            w: 11,
            x: 11,
            y: 1,
          },
          id: 3,
          options: {
            displayMode: 'gradient',
            minVizHeight: 10,
            minVizWidth: 0,
            orientation: 'horizontal',
            reduceOptions: {
              calcs: [],
              fields: '',
              values: true,
            },
            showUnfilled: true,
            text: {},
            valueMode: 'color',
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                "SELECT\n  relname as table_name,\n  reltuples as rows\nFROM\n  pg_class C\n  LEFT JOIN pg_namespace N ON (N.oid = C .relnamespace)\nWHERE\n  nspname NOT IN ('pg_catalog', 'information_schema')\n  AND relkind = 'r'\nORDER BY\n  reltuples DESC;",
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
          title: 'Row Counts by Schema Tables',
          type: 'bargauge',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'In summary, this metric measures the query column and calculates the average execution time per call for each row in the pg_stat_statements table. It then sorts the remaining rows by the average execution time in descending order, and returns only the top 10 rows.',
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
              unit: 'm',
            },
            overrides: [],
          },
          gridPos: {
            h: 8,
            w: 11,
            x: 0,
            y: 9,
          },
          id: 4,
          options: {
            displayMode: 'gradient',
            minVizHeight: 10,
            minVizWidth: 0,
            orientation: 'horizontal',
            reduceOptions: {
              calcs: [],
              fields: '',
              values: true,
            },
            showUnfilled: true,
            valueMode: 'color',
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT query,\n       mean_exec_time / calls AS avg_exec_time\nFROM pg_stat_statements\nORDER BY avg_exec_time DESC\nLIMIT 10;',
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
          title: 'Highest Average Execution Time ',
          type: 'bargauge',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'This chart displays index scans per table. If index_scans is 0 or close to 0 then you can drop those indexes. But be careful, as maybe those indexes are for unique purposes.',
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
            },
            overrides: [],
          },
          gridPos: {
            h: 8,
            w: 11,
            x: 11,
            y: 9,
          },
          id: 5,
          options: {
            displayMode: 'gradient',
            minVizHeight: 10,
            minVizWidth: 0,
            orientation: 'horizontal',
            reduceOptions: {
              calcs: [],
              fields: '',
              values: true,
            },
            showUnfilled: true,
            valueMode: 'color',
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT s.relname AS table_name,\n       indexrelname AS index_name,\n       i.indisunique,\n       idx_scan AS index_scans\nFROM   pg_catalog.pg_stat_user_indexes s\nJOIN   pg_index i ON i.indexrelid = s.indexrelid\nORDER BY idx_scan DESC;',
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
          title: 'Index Scans by Table',
          type: 'bargauge',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'Measured by (shared_blks_hit + shared_blks_dirtied) calculates the sum of shared_blks_hit and shared_blks_dirtied as shared_block_accesses. This sum represents the total shared block accesses for each query. Including this expression as a separate column allows you to see the calculated value in the query output.',
          fieldConfig: {
            defaults: {
              color: {
                mode: 'palette-classic',
              },
              custom: {
                hideFrom: {
                  legend: false,
                  tooltip: false,
                  viz: false,
                },
              },
              mappings: [],
            },
            overrides: [],
          },
          gridPos: {
            h: 8,
            w: 11,
            x: 0,
            y: 17,
          },
          id: 6,
          options: {
            displayLabels: ['percent'],
            legend: {
              displayMode: 'list',
              placement: 'right',
              showLegend: false,
              values: [],
            },
            pieType: 'donut',
            reduceOptions: {
              calcs: ['lastNotNull'],
              fields: '',
              values: true,
            },
            tooltip: {
              mode: 'multi',
              sort: 'asc',
            },
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT userid::regrole, dbid, query, (shared_blks_hit + shared_blks_dirtied) AS shared_block_accesses\nFROM pg_stat_statements\nORDER BY shared_block_accesses DESC\nLIMIT 10;',
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
          title: 'Highest Queries by Memory Usage',
          type: 'piechart',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'This chart is displaying the size of every table, index, and the total size of the table',
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
            },
            overrides: [],
          },
          gridPos: {
            h: 8,
            w: 11,
            x: 11,
            y: 17,
          },
          id: 7,
          options: {
            cellHeight: 'sm',
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
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                "SELECT    CONCAT(n.nspname,'.', c.relname) AS table,\n          i.relname AS index_name, pg_size_pretty(pg_relation_size(x.indrelid)) AS table_size,\n          pg_size_pretty(pg_relation_size(x.indexrelid)) AS index_size,\n          pg_size_pretty(pg_total_relation_size(x.indrelid)) AS total_size FROM pg_class c \nJOIN      pg_index x ON c.oid = x.indrelid\nJOIN      pg_class i ON i.oid = x.indexrelid\nLEFT JOIN pg_namespace n ON n.oid = c.relnamespace\nWHERE     c.relkind = ANY (ARRAY['r', 't'])\nAND       n.oid NOT IN (99, 11, 12375);",
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
          title: 'Total of Table Size and Index Size ',
          type: 'table',
        },
        {
          collapsed: false,
          gridPos: {
            h: 1,
            w: 24,
            x: 0,
            y: 25,
          },
          id: 8,
          panels: [],
          title: 'General ',
          type: 'row',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description: 'Chart lists general information on database connected',
          fieldConfig: {
            defaults: {
              color: {
                mode: 'thresholds',
              },
              custom: {
                align: 'auto',
                cellOptions: {
                  type: 'auto',
                },
                inspect: false,
                minWidth: 100,
                width: 100,
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
            },
            overrides: [],
          },
          gridPos: {
            h: 5,
            w: 6,
            x: 0,
            y: 26,
          },
          id: 9,
          options: {
            cellHeight: 'sm',
            footer: {
              countRows: false,
              enablePagination: true,
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
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT current_database() AS DB_Name,\n       pg_catalog.pg_get_userbyid(datdba) AS admin,\n       pg_catalog.pg_size_pretty(pg_catalog.pg_database_size(current_database())) AS size\nFROM pg_catalog.pg_database\nWHERE datname = current_database();',
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
          title: 'Database Info:',
          type: 'table',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'The PostgreSQL cache area is known as shared_buffers, which acts as the database layer cache on top of the cache provided by the operating system. We can use these metrics to understand the cache hit ratio. We are simply getting the values of hits (from the cache) and reads (from the disk) and calculating the ratio rounded off to four digits. It is important to note that in a healthy production database, this ratio should come to around 97+ or close to it—97% of the hits are coming from the cache.\n\n',
          fieldConfig: {
            defaults: {
              mappings: [],
              thresholds: {
                mode: 'percentage',
                steps: [
                  {
                    color: 'green',
                    value: null,
                  },
                  {
                    color: 'orange',
                    value: 70,
                  },
                  {
                    color: 'red',
                    value: 85,
                  },
                ],
              },
            },
            overrides: [],
          },
          gridPos: {
            h: 5,
            w: 6,
            x: 6,
            y: 26,
          },
          id: 10,
          options: {
            orientation: 'auto',
            reduceOptions: {
              calcs: ['lastNotNull'],
              fields: '',
              values: false,
            },
            showThresholdLabels: false,
            showThresholdMarkers: false,
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT\n  sum(heap_blks_read) as reads,\n  sum(heap_blks_hit) as hits,\n  ROUND(\n    sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)),\n    4\n  ) as hit_ratio\nFROM\n  pg_statio_user_tables;',
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
          title: 'Cache-Hit Ratio',
          type: 'gauge',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'This chart is measuring all databases available in the PostgreSQL server connected. Size is measured by querying into pg_database.',
          fieldConfig: {
            defaults: {
              color: {
                mode: 'continuous-GrYlRd',
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
            },
            overrides: [],
          },
          gridPos: {
            h: 5,
            w: 6,
            x: 12,
            y: 26,
          },
          id: 11,
          options: {
            displayMode: 'lcd',
            minVizHeight: 10,
            minVizWidth: 0,
            orientation: 'horizontal',
            reduceOptions: {
              calcs: [],
              fields: '',
              values: true,
            },
            showUnfilled: true,
            valueMode: 'color',
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT\n  datname as database_name,\n  pg_database_size(datname)/1024/1024 as size\nFROM\n  pg_database\nWHERE\n  datistemplate = false;',
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
          title: 'Database by Size',
          type: 'bargauge',
        },
        {
          datasource: {
            type: 'postgres',
            uid: uid,
          },
          description:
            'This chart displays how many open connections are currently present in our database cluster.',
          fieldConfig: {
            defaults: {
              color: {
                mode: 'continuous-GrYlRd',
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
            },
            overrides: [],
          },
          gridPos: {
            h: 6,
            w: 6,
            x: 0,
            y: 31,
          },
          id: 12,
          options: {
            displayMode: 'lcd',
            minVizHeight: 10,
            minVizWidth: 0,
            orientation: 'horizontal',
            reduceOptions: {
              calcs: [],
              fields: '',
              values: true,
            },
            showUnfilled: true,
            valueMode: 'color',
          },
          pluginVersion: '10.0.1',
          targets: [
            {
              datasource: {
                type: 'postgres',
                uid: uid,
              },
              editorMode: 'code',
              format: 'table',
              rawQuery: true,
              rawSql:
                'SELECT\n  COUNT(*) as connections,\n  backend_type\nFROM\n  pg_stat_activity\nGROUP BY\n  backend_type\nORDER BY\n  connections DESC',
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
          title: 'Open Connections ',
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
      title: 'QueryIQ Dashboard for Database Performance Metrics',
      uid: null,
      version: 2,
      weekStart: '',
    },
  };

  return dashboard;
};