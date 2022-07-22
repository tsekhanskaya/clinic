class MedicalReport < ApplicationRecord
  belongs_to :disease
  belongs_to :patient
  belongs_to :employee
end
