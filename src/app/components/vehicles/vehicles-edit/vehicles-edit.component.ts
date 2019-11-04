import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../../services/vehicle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../../entities/Vehicle';

@Component({
  selector: 'app-vehicles-edit',
  templateUrl: './vehicles-edit.component.html',
  styleUrls: ['./vehicles-edit.component.css']
})
export class VehiclesEditComponent implements OnInit {

  vehicle: Vehicle = {
    id: 0,
    vin: '',
    horseCount: 0,
    model: ''
  };

  constructor(private vehicleService: VehicleService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.vehicleService.getOne(params.get('id')).then(data => {
        this.vehicle = data;
        console.log(data);
      }, err => console.log(err.message));
      console.log(params.get('id'));
    });
  }


  update() {
    this.vehicleService.update(this.vehicle, this.vehicle.id).then(data => {
      console.log(data);
      this.router.navigateByUrl('/admin/vehicles');
    }, err => console.log(err.message));
  }

}
