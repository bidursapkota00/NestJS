import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module'; // add this

@Module({
  imports: [PowerModule], // add this
  providers: [CpuService],
  exports: [CpuService], // add this
})
export class CpuModule {}
