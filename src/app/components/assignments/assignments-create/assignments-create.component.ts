import {Component, OnInit} from '@angular/core';
import {Request} from '../../../entities/request';
import {Employee} from '../../../entities/employee';
import {Assignment} from '../../../entities/assignment';
import {RequestService} from '../../../services/request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../../../services/assignment.service';
import {ToolService} from '../../../services/tool.service';
import {Tool} from '../../../entities/Tool';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignments-create.component.html',
  styleUrls: ['./assignments-create.component.css']
})
export class AssignmentsCreateComponent implements OnInit {
  employee: Employee = {
    cin: '',
    department: {id: 0, name: ''},
    email: '',
    firstName: '',
    function: {id: 0, name: ''},
    id: 0,
    lastName: '',
    registrationNumber: '',
    tel: ''

  };
  request: Request = {
    reason: '',
    assignment: undefined,
    category: {id: 0, name: ''},
    comment: '',
    employee: this.employee,
    endDate: undefined,
    id: 0,
    isAccepted: 0,
    requestDate: undefined,
    startDate: undefined

  };
  tool: Tool = {
    brand: '', category: undefined, id: 0, registrationNumber: '', state: undefined

  };
  assignment: Assignment = {
    id: 0,
    request: this.request,
    tool: this.tool
  };
  form: FormGroup;
  displayComment: boolean = false;
  displayTools: boolean = false;
  submitted: boolean;
  tools: Tool[];
  item: string;

  constructor(private requestService: RequestService,
              private router: Router,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private toolService: ToolService,
              private assignmentService: AssignmentService) {

  }

  ngOnInit() {
    this.requestService.setBASE_URL('http://localhost:8080/api/admin/requests');
    this.loadData();
    this.form = this.fb.group({
      'id': new FormControl(),
      'request': this.fb.group({
        'id': [''],
        'comment': [''],
        'isAccepted': ['', Validators.required]
      }),
      'tool': new FormControl(''),
    });
    this.submitted = false;
    this.form.patchValue({tool: this.tool});
  }

  loadData() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.getRequest(params.get('id'));
    });
  }

  getRequest(id) {
    this.requestService.getOne(id).then(data => {
      this.request = data;
      this.request.startDate = new Date(this.request.startDate);
      this.request.endDate = new Date(this.request.endDate);
      this.assignment.request = this.request;
      this.form.patchValue({request: {id: this.request.id}});
      this.getTools();
      console.log(data);
    }, err => console.log(err.message));
  }

  getTools() {
    this.toolService.getAvailable(this.request.category.id, this.request.startDate, this.request.endDate)
      .then(data => {
        this.tools = data;
        this.tools.forEach(v => {
          v.label = v.brand+"   "+v.registrationNumber;
          console.log(v);
        });

        console.log(this.tools);
      }, err => {
        console.error(err);
      });
  }

  create() {
    this.submitted = true;
    this.assignment = this.form.getRawValue();
    this.assignmentService.save(this.assignment).then(data => {
      this.router.navigateByUrl('/admin/requests');
    }, err => console.log(err.message));
  }

  change(val) {
    if (val == 0) {
      this.displayComment = true;
      this.displayTools = false;
      this.form.patchValue({tool: this.tool});

    } else {
      this.displayComment = false;
      this.displayTools = true;
      this.form.patchValue({request: {comment: ''}});
    }

  }
}
