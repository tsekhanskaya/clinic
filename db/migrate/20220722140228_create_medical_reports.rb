# frozen_string_literal: true

class CreateMedicalReports < ActiveRecord::Migration[7.0]
  def change
    create_table :medical_reports do |t|
      t.date :data_examination
      t.string :sick_leave
      t.string :prescribing
      t.string :recommendation

      t.belongs_to :patient
      t.belongs_to :employee
      t.belongs_to :disease

      t.timestamps
    end
  end
end
