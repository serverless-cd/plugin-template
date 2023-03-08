import { Logger, getInputs } from '@serverless-cd/core';

export async function run(
  inputs: Record<string, any>,
  context: Record<string, any>,
  logger: Logger,
) {
  logger.info('Start demo plugin');
  logger.info(`inputs: ${JSON.stringify(inputs, null, 2)}`);
  const newInputs = getInputs(inputs, context);
  logger.info(`newInputs: ${JSON.stringify(newInputs, null, 2)}`);
  // do something

  logger.info('End demo plugin');
}
