import { Logger, getInputs } from '@serverless-cd/core';
import { IInputs } from './types';

export async function run(
  inputs: IInputs,
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
