# frozen_string_literal: true

class Patient < ApplicationRecord
  has_many :medical_reports
end
