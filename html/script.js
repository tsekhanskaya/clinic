function getelements(elements) {
    $.ajax('http://localhost:3000/' + elements,
        {
            success: function (data) {
                if (elements === 'employees') {
                    let elements = ""
                    data.forEach(element => {
                    {
                        elements += "Идентификатор сотрудника: " + element.id +
                                    "; ФИО сотрудника: " + element.fullname +
                                    "; Идентификатор должности: "+element.position_id+
                                    "; Идентификатор специализации: "+ element.specialization_id".\n"
                    }
                  })
                  alert(elements)
                }
                if (elements === 'specializations') {
                    let elements = ""
                    data.forEach(element => {
                        {
                            elements += "Идентификатор специализации: " + element.id +
                            "; Наименование специализации: " + element.specialty + ".\n"
                        }
                    })
                    alert(elements)
                }
                if (elements === 'positions') {
                    let elements = ""
                    data.forEach(element => {
                        {
                            elements += "Идентификатор должности: " + element.id +
                            "; Наименование должности: " + element.post + ".\n"
                        }
                    })
                    alert(elements)
                }
                if (elements === 'patients') {
                    let elements = ""
                    data.forEach(element => 
                    {
                        elements += "Идентификатор пациента: " + element.id +
                                    "; Фамилия: " + element.last_name +
                                    "; Имя: " + element.first_name+
                                    "; Отчество: "+element.patronymic+
                                    "; Дата рождения: "+element.birthdate+
                                    "; Телефон: "+element.phone".\n"
                    }
                    )
                  alert(elements)
                }
                if (elements === 'disease') {
                    let elements = ""
                    data.forEach(element => {
                        {
                            elements += "Идентификатор диагноза: " + element.id +
                            "; Код диагноза: " + element.code +
                            "; Название диагноза: " + element.disease_name + ".\n"
                        }
                    })
                    alert(elements)
                }
                if (elements === 'medical_reports') {
                    let elements = ""
                    data.forEach(element => {
                    {
                        elements += "Идентификатор медицинского отчета: " + element.id +
                                    "; Дата записи: " + element.data_examination +
                                    "; Наличие больчного: " + element.sick_leave+
                                    "; Назначенные медицинские препараты: "+element.prescribing+
                                    "; Рекомендация использования прапаратов: "+element.recommendation+
                                    "; Идентификатор пациента: "+element.patient_id+
                                    "; Идентификатор сотрудника: " + element.employee_id +
                                    "; Идентификатор диагноза: "+element.disease_id".\n"
                    }
                  })
                  alert(elements)
                }
            }
        })
}
