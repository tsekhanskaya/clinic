class Employee < ApplicationRecord
  belongs_to :position
  belongs_to :specialization
end
