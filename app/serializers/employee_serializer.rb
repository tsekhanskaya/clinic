# frozen_string_literal: true

class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :fullname
  has_many :specialization
  has_one :position
end
