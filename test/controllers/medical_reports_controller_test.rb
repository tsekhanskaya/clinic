require "test_helper"

class MedicalReportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @medical_report = medical_reports(:one)
  end

  test "should get index" do
    get medical_reports_url, as: :json
    assert_response :success
  end

  test "should create medical_report" do
    assert_difference("MedicalReport.count") do
      post medical_reports_url, params: { medical_report: { data_examination: @medical_report.data_examination, prescribing: @medical_report.prescribing, recommendation: @medical_report.recommendation, sick_leave: @medical_report.sick_leave } }, as: :json
    end

    assert_response :created
  end

  test "should show medical_report" do
    get medical_report_url(@medical_report), as: :json
    assert_response :success
  end

  test "should update medical_report" do
    patch medical_report_url(@medical_report), params: { medical_report: { data_examination: @medical_report.data_examination, prescribing: @medical_report.prescribing, recommendation: @medical_report.recommendation, sick_leave: @medical_report.sick_leave } }, as: :json
    assert_response :success
  end

  test "should destroy medical_report" do
    assert_difference("MedicalReport.count", -1) do
      delete medical_report_url(@medical_report), as: :json
    end

    assert_response :no_content
  end
end
