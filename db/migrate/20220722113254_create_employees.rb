class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :fullname

      t.belongs_to :position
      t.belongs_to :specialization 

      t.timestamps
    end
  end
end
