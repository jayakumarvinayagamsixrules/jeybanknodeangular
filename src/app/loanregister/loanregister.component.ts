import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loanregister',
  templateUrl: './loanregister.component.html',
  styleUrls: ['./loanregister.component.scss']
})
export class LoanregisterComponent implements OnInit {
// Applicants Details 
// Employment Details
// Referees Details
// . Financial Details
// Loan Request Details 
// Loan Request Details 
// . For Official Use  ---####
// Customer declaration

  applicantsFormGroup: FormGroup;
  employmentFormGroup: FormGroup;
  refereesFormGroup: FormGroup;
  financialFormGroup: FormGroup;
  loanRequestFormGroup: FormGroup;
  securityofferedFormGroup: FormGroup;
  isEditable = true;
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) {
    this.applicantsFormGroup = this._formBuilder.group({
      applicantFirstNameCtrl            : ['', Validators.required],
      applicantMiddleNameCtrl           : [''],
      applicantLastNameCtrl             : ['', Validators.required],
      applicantIdentificationCtrl       : ['', Validators.required],
      applicantNationalityCtrl          : ['', Validators.required],
      applicantTaxPinCtrl               : ['', Validators.required],
      applicantDateOfBirthCtrl          : ['', Validators.required],
      applicantGenderCtrl               : ['', Validators.required],
      applicantMaritalStatusCtrl        : ['', Validators.required],
      applicantPostalAddressCtrl        : ['', Validators.required],
      applicantPostalCodeCtrl           : ['', Validators.required],
      applicantStateCtrl                : ['', Validators.required],
      applicantDistrictCtrl             : ['', Validators.required],
      applicantCountryCtrl              : ['', Validators.required],
      applicantPresentAddressCtrl       : ['', Validators.required],
      applicantPresentPostalCodeCtrl    : ['', Validators.required],
      applicantPresentStateCtrl         : ['', Validators.required],
      applicantPresentDistrictCtrl      : ['', Validators.required],
      applicantPresentCountryCtrl       : ['', Validators.required],
      applicantPhoneNumberCtrl          : ['', Validators.required],
      applicantEmailCtrl                : ['', Validators.required],
      applicantEducationalLevelCtrl     : [''],
      applicantNumberOfDependantsCtrl   : [''],
    });
    this.employmentFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.refereesFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.financialFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.loanRequestFormGroup = this._formBuilder.group({
      loanRequestLoanRequestCtrl:['', Validators.required],
      loanRequestFacilityTypeCtrl:['', Validators.required],
      loanRequestLoanAmountCtrl:['', Validators.required],
      loanRequestCostOfItemsCtrl:['', Validators.required],
      loanRequestPurposeOfLoanCtrl:['', Validators.required],
      loanRequestRepaymentPeriodCtrl:['', Validators.required],
      loanRequestMonthlyPaymentCtrl:['', Validators.required],
      loanRequestAccountCreditedCtrl:['', Validators.required]
    });
    this.securityofferedFormGroup = this._formBuilder.group({
      securityDescriptionCtrl             : ['', Validators.required],
      securityEstimatiedMarketvalueCtrl   : ['', Validators.required],
      securityLocationCtrl                : ['', Validators.required],
      securitySizeCtrl                    : ['', Validators.required],
      securityNameOfCtrl                  : ['', Validators.required],
      securityIsDevelopedPropertyCtrl     : ['', Validators.required],
      securityLoanDurationCtrl            : ['', Validators.required],
      securityPremiumRateCtrl             : ['', Validators.required],
      securityTotalPremiumCtrl            : ['', Validators.required],
    });
  }

  ngOnInit() {
    var existingEntries = JSON.parse(localStorage.getItem("store_owner_ad_contacts")|| '{}');
  }

}
