# frozen_string_literal: true

class Disease < ApplicationRecord
  has_many :medical_reports
end
