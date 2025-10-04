import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from '../power/power.module'; // add this

@Module({
  imports: [PowerModule], // add this
  providers: [DiskService],
  exports: [DiskService], // add this
})
export class DiskModule {}
