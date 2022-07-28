# frozen_string_literal: true

class MedicalReportsController < ApplicationController
  before_action :set_medical_report, only: %i[show update destroy]

  # GET /medical_reports
  def index
    @medical_reports = MedicalReport.all

    render json: @medical_reports
  end

  # GET /medical_reports/1
  def show
    render json: @medical_report
  end

  # POST /medical_reports
  def create
    @medical_report = MedicalReport.new(medical_report_params)

    if @medical_report.save
      render json: @medical_report, status: :created, location: @medical_report
    else
      render json: @medical_report.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /medical_reports/1
  def update
    @medical_report.assign_attributes(medical_report_params)
    if @medical_report.save
      render json: @medical_report
    else
      render json: @medical_report.errors, status: :unprocessable_entity
    end
  end

  # DELETE /medical_reports/1
  def destroy
    @medical_report.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_medical_report
    @medical_report = MedicalReport.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def medical_report_params
    params.require(:medical_report).permit(:data_examination, :sick_leave, :prescribing, :recommendation, :patient_id, :employee_id, :disease_id)
  end
end
