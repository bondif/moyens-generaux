import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {Vehicle} from '../../../entities/Vehicle';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-create',
  templateUrl: './vehicles-create.component.html',
  styleUrls: ['./vehicles-create.component.css']
})
export class VehiclesCreateComponent implements OnInit {

  vehicle: Vehicle = {
    id: 0,
    vin: '',
    horseCount: 0,
    model: ''
  };

  constructor(private vehicleService: VehicleService,
              private router: Router) {
  }

  ngOnInit() {
  }

  save() {
    this.vehicleService.save(this.vehicle).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/vehicles');
    }, err => console.log(err.message));
  }
}
