import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Researches
import { ResearchesService } from './researches/researches.service';
import { ResearchesController } from './researches/researches.controller';
import { Research, ResearchSchema } from './researches/research.model';

// Users
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { User, UserSchema } from './users/user.model';

// ELISA Plates
import { ElisaPlatesService } from './elisa-plate/elisa-plates.service';
import { ElisaPlatesController } from './elisa-plate/elisa-plates.controller';
import { ElisaPlate, ElisaPlateSchema } from './elisa-plate/elisa-plate.model';

// Wells
import { WellsService } from './well/wells.service';
import { WellsController } from './well/wells.controller';
import { Well, WellSchema } from './well/well.model';

// Layers
import { LayersService } from './layer/layers.service';
import { LayersController } from './layer/layers.controller';
import { Layer, LayerSchema } from './layer/layer.model';

// Substances
import { SubstancesService } from './substance/substances.service';
import { SubstancesController } from './substance/substances.controller';
import { Substance, SubstanceSchema } from './substance/substance.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Replace with your MongoDB connection string
    MongooseModule.forFeature([
      { name: Research.name, schema: ResearchSchema },
      { name: User.name, schema: UserSchema },
      { name: ElisaPlate.name, schema: ElisaPlateSchema },
      { name: Well.name, schema: WellSchema },
      { name: Layer.name, schema: LayerSchema },
      { name: Substance.name, schema: SubstanceSchema },
    ]),
  ],
  controllers: [
    AppController,
    ResearchesController,
    UsersController,
    ElisaPlatesController,
    WellsController,
    LayersController,
    SubstancesController,
  ],
  providers: [
    AppService,
    ResearchesService,
    UsersService,
    ElisaPlatesService,
    WellsService,
    LayersService,
    SubstancesService,
  ],
})
export class AppModule {}
