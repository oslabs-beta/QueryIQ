/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response, RequestHandler, NextFunction } from 'express';

type GrafanaController = {
  grafanaFetch: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
};

export const grafanaController: GrafanaController = {
  grafanaFetch: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const response = await fetch(
      'https://influx-prod-13-prod-us-east-0.grafana.net/api/v1/push/influx/write',
      {
        method: 'post',
        headers: {
          // prettier-ignore
          Authorization: `Bearer ${process.env.GRAFANA_GCLOUD_HOSTED_METRICS_ID!}:${process.env.GRAFANA_HTTP_METRICS_PROMETHEUS_API_KEY!}`,
          'Content-Type': 'text/plain',
        },
        /***************************************************
         * body must be in Prometheus style format:
         * --> const body = 'test,bar_label=abc,source=grafana_cloud_docs metric=35.2';
         *
         * Name: Prometheus style name(required)
         * Label: Identifies a specific visualization of a metric
         * Source: The source of the metric, the instance job that is generating the metric
         * Metric: Metric to be pushed up, the specific value
         **************************************************/
        body: JSON.stringify(req.body),
      }
    );
    const data = response.status;
    res.locals.grafanaFetch = data;
    console.log(data);
    next();
  },
};
