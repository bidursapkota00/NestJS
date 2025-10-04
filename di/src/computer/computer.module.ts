import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from '../cpu/cpu.module'; // add this
import { DiskModule } from '../disk/disk.module'; // add this

@Module({
  imports: [CpuModule, DiskModule], // add this
  controllers: [ComputerController],
})
export class ComputerModule {}
