require 'test_helper'

class ButterfliesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @butterfly = butterflies(:one)
  end

  test "should get index" do
    get butterflies_url
    assert_response :success
  end

  test "should get new" do
    get new_butterfly_url
    assert_response :success
  end

  test "should create butterfly" do
    assert_difference('Butterfly.count') do
      post butterflies_url, params: { butterfly: { family: @butterfly.family, image: @butterfly.image, name: @butterfly.name } }
    end

    assert_redirected_to butterfly_url(Butterfly.last)
  end

  test "should show butterfly" do
    get butterfly_url(@butterfly)
    assert_response :success
  end

  test "should get edit" do
    get edit_butterfly_url(@butterfly)
    assert_response :success
  end

  test "should update butterfly" do
    patch butterfly_url(@butterfly), params: { butterfly: { family: @butterfly.family, image: @butterfly.image, name: @butterfly.name } }
    assert_redirected_to butterfly_url(@butterfly)
  end

  test "should destroy butterfly" do
    assert_difference('Butterfly.count', -1) do
      delete butterfly_url(@butterfly)
    end

    assert_redirected_to butterflies_url
  end
end
