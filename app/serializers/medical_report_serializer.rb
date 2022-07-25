class MedicalReportSerializer < ActiveModel::Serializer
  attributes :id, :data_examination, :sick_leave, :prescribing, :recommendation
  has_one :employee
  has_one :patient
  has_one :disease
end
