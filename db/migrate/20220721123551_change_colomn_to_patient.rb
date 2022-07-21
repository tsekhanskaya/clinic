class ChangeColomnToPatient < ActiveRecord::Migration[7.0]
  def change
    change_column :patients, :birthdate, :string
  end
end
