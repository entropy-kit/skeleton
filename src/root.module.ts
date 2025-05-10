import { Module } from '@entropy-kit/core';
import { RootController } from './root.controller';

export class RootModule implements Module {
  public readonly channels = [];

  public readonly controllers = [
    RootController,
  ];
}
