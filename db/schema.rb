# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_220_722_140_228) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'diseases', force: :cascade do |t|
    t.string 'code'
    t.string 'disease_name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'employees', force: :cascade do |t|
    t.string 'fullname'
    t.bigint 'position_id'
    t.bigint 'specialization_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['position_id'], name: 'index_employees_on_position_id'
    t.index ['specialization_id'], name: 'index_employees_on_specialization_id'
  end

  create_table 'medical_reports', force: :cascade do |t|
    t.date 'data_examination'
    t.string 'sick_leave'
    t.string 'prescribing'
    t.string 'recommendation'
    t.bigint 'patient_id'
    t.bigint 'employee_id'
    t.bigint 'disease_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['disease_id'], name: 'index_medical_reports_on_disease_id'
    t.index ['employee_id'], name: 'index_medical_reports_on_employee_id'
    t.index ['patient_id'], name: 'index_medical_reports_on_patient_id'
  end

  create_table 'patients', force: :cascade do |t|
    t.string 'last_name'
    t.string 'first_name'
    t.string 'patronymic'
    t.string 'birthdate'
    t.string 'phone'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'positions', force: :cascade do |t|
    t.string 'post'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'specializations', force: :cascade do |t|
    t.string 'specialty'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end
end
