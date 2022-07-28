function showElements(elements) {
  $.ajax('http://localhost:3000/' + elements,
      {
        success: function (data) {
          if (elements === 'employees') {
            let elements = "";
              data.forEach(element => {
                elements += "Идентификатор сотрудника: " + element.id +
                            ";\nФИО сотрудника: " + element.fullname +
                            ";\nИдентификатор должности: " + element.position_id +
                            ";\nИдентификатор специализации: " + element.specialization_id + ".\n\n";
               })
            return alert(elements);
          }
          if (elements === 'specializations') {
            let elements = "";
              data.forEach(element => {
                elements += "Идентификатор специализации: " + element.id +
                            ";\nНаименование специализации: " + element.specialty + ".\n\n";
              })
           return alert(elements);
          }
          if (elements === 'positions') {
            let elements = "";
            data.forEach(element => {
              elements += "Идентификатор должности: " + element.id +
                          ";\nНаименование должности: " + element.post + ".\n\n"
            })
            return alert(elements);
          }
          if (elements === 'patients') {
            let elements = "";
            data.forEach(element => {
              elements += "Идентификатор пациента: " + element.id +
                          ";\nФамилия: " + element.last_name +
                          ";\nИмя: " + element.first_name +
                          ";\nОтчество: " + element.patronymic +
                          ";\nДата рождения: " + element.birthdate +
                          ";\nТелефон: " + element.phone + ".\n\n";
            })
            return alert(elements);
          }
          if (elements === 'diseases') {
              let elements = "";
              data.forEach(element => {
                elements += "Идентификатор диагноза: " + element.id +
                            ";\nКод диагноза: " + element.code +
                            ";\nНазвание диагноза: " + element.disease_name + ".\n\n";
              })
              return alert(elements);
          }
          if (elements === 'medical_reports') {

              let elements = "";

              data.forEach(element => {
                elements += "Идентификатор медицинского отчета: " + element.id +
                            ";\nДата записи: " + element.data_examination +
                            ";\nНаличие больчного: " + element.sick_leave +
                            ";\nНазначенные медицинские препараты: " + element.prescribing +
                            ";\nРекомендация использования препаратов: " + element.recommendation +
                            ";\nИдентификатор пациента: " + element.patient_id +
                            ";\nИдентификатор сотрудника: " + element.employee_id +
                            ";\nИдентификатор диагноза: " + element.disease_id + ".\n\n";
              })

              return alert(elements);
          }
        }
      }
    )
}

function addElement(elements) {
  let  element;

  if (elements === "employees"){
    element = {
      "employee": {
        "fullname": document.getElementById('employee_fullname').value,
        "position_id": document.getElementById('employee_position').value,
        "specialization_id": document.getElementById('employee_specialization').value
      }
    }
  }

  if (elements === "specializations"){
    element = {
      "specialization": {
        "specialty": document.getElementById('specialization_name').value
      }
    }
  }

  if (elements === "positions"){
    element = {
      "position": {
        "post": document.getElementById('position_name').value
      }
    }
  }

  if (elements === "patients"){
    element = {
      "patient": {
        "last_name": document.getElementById('patient_lastname').value,
        "first_name": document.getElementById('patient_firstname').value,
        "patronymic": document.getElementById('patient_patronymic').value,
        "birthdate": document.getElementById('position_name').value,
        "phone": document.getElementById('patient_phone').value
      }
    }
  }

  if (elements === "diseases"){
    element = {
      "disease": {
        "code": document.getElementById('disease_code').value,
        "disease_name": document.getElementById('disease_name').value
      }
    }
  }

  if (elements === "medical_reports"){
    element = {
      "medical_report": {
        "data_examination": document.getElementById('medical_report_date').value,
        "sick_leave": document.getElementById('medical_report_sick_leave').value,
        "prescribing": document.getElementById('medical_report_prescribing').value,
        "recommendation": document.getElementById('medical_report_recommendation').value,
        "patient_id": document.getElementById('medical_report_patient').value,
        "employee_id": document.getElementById('medical_report_employee').value,
        "disease_id": document.getElementById('medical_report_disease').value
      }
    }
  }

  $.ajax({
    url: 'http://localhost:3000/' + elements,
    method: 'post',
    dataType: 'json',
    data: element
    }
  )
}

function updateElement(elements) {
  let element;
  let element_id;

  if (elements === "employees"){
    element_id = document.getElementById('employee_id').value;

    element = {
      "employee": {
        "fullname": document.getElementById('employee_fullname').value,
        "position_id": document.getElementById('employee_position').value,
        "specialization_id": document.getElementById('employee_specialization').value
      }
    }
  }

  if (elements === "specializations"){
    element_id = document.getElementById('specialization_id').value;

    element = {
      "specialization": {
        "specialty": document.getElementById('specialization_name').value
      }
    }
  }

  if (elements === "positions"){
    element_id = document.getElementById('position_id').value;

    element = {
      "position": {
        "post": document.getElementById('position_name').value
      }
    }
  }

  if (elements === "patients"){
    element_id = document.getElementById('patient_id').value;

    element = {
      "patient": {
        "last_name": document.getElementById('patient_lastname').value,
        "first_name": document.getElementById('patient_firstname').value,
        "patronymic": document.getElementById('patient_patronymic').value,
        "birthdate": document.getElementById('position_name').value,
        "phone": document.getElementById('patient_phone').value
      }
    }
  }

  if (elements === "diseases"){
    element_id = document.getElementById('disease_id').value;

    element = {
      "disease": {
        "code": document.getElementById('disease_code').value,
        "disease_name": document.getElementById('disease_name').value
      }
    }
  }

  if (elements === "medical_reports"){
    element_id = document.getElementById('medical_report_id').value;

    element = {
      "medical_report": {
        "data_examination": document.getElementById('medical_report_date').value,
        "sick_leave": document.getElementById('medical_report_sick_leave').value,
        "prescribing": document.getElementById('medical_report_prescribing').value,
        "recommendation": document.getElementById('medical_report_recommendation').value,
        "patient_id": document.getElementById('medical_report_patient').value,
        "employee_id": document.getElementById('medical_report_employee').value,
        "disease_id": document.getElementById('medical_report_disease').value
      }
    }
  }

  $.ajax({
    url: 'http://localhost:3000/' + elements + '/' + element_id,
    method: 'put',
    dataType: 'json',
    data: element
    }
  )
}

function deleteElement(elements) {
  let element_id;
  if (elements === "employees") element_id = document.getElementById('employee_id').value;
  if (elements === "specializations") element_id = document.getElementById('specialization_id').value;
  if (elements === "positions") element_id = document.getElementById('position_id').value;
  if (elements === "patients") element_id = document.getElementById('patient_id').value;
  if (elements === "diseases") element_id = document.getElementById('disease_id').value;
  if (elements === "medical_reports") element_id = document.getElementById('medical_report_id').value;


  $.ajax({
    url: 'http://localhost:3000/' + elements + "/" + element_id,
    method: 'delete',
    dataType: 'json'
    }
  )
}
