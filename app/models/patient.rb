class Patient < ApplicationRecord
  has_many :medical_reports
end
