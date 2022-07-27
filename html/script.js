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

  if (elements === "employees") {
    let resultBooksId = []
    let employee = document.getElementById('employee_id').value

    element = {
      employee_id: employee,
      fullname: document.getElementById('employee_fullname').value,
      specialization: document.getElementById('employee_specialization').value,
      position: document.getElementById('employee_position').value
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

function updateElement(elements) {}

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
