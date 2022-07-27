# frozen_string_literal: true

class CreatePositions < ActiveRecord::Migration[7.0]
  def change
    create_table :positions do |t|
      t.string :post

      t.timestamps
    end
  end
end
