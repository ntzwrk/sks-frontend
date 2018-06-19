import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { KeyService } from '../../services/key.service';

enum SubmitStatus {
  waiting = "Waiting on a response from the keyserver.",
  success = "Success!",
  failure = "Failed uploading the key, please check your key."
}

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  key = '';
  status: SubmitStatus;
  availableStatus = SubmitStatus;

  constructor(private keyService: KeyService) { }

  ngOnInit() {
  }

  submit() {
    if (!this.key.trim()) {
      return;
    }

    this.status = SubmitStatus.waiting;
    const response = this.keyService.submit(this.key);

    response.then(
      () => this.status = SubmitStatus.success
    ).catch(
      () => this.status = SubmitStatus.failure
    );
  }

}
