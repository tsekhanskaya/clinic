class Employee < ApplicationRecord
  belongs_to :position
  belongs_to :specialization
  has_many :medical_reports
end
