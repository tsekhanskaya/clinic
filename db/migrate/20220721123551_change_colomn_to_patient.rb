# frozen_string_literal: true

class ChangeColomnToPatient < ActiveRecord::Migration[7.0]
  def change
    change_column :patients, :birthdate, :string
  end
end
