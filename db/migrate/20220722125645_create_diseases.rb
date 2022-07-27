# frozen_string_literal: true

class CreateDiseases < ActiveRecord::Migration[7.0]
  def change
    create_table :diseases do |t|
      t.string :code
      t.string :disease_name

      t.timestamps
    end
  end
end
