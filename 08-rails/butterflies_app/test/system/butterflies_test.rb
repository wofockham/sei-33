require "application_system_test_case"

class ButterfliesTest < ApplicationSystemTestCase
  setup do
    @butterfly = butterflies(:one)
  end

  test "visiting the index" do
    visit butterflies_url
    assert_selector "h1", text: "Butterflies"
  end

  test "creating a Butterfly" do
    visit butterflies_url
    click_on "New Butterfly"

    fill_in "Family", with: @butterfly.family
    fill_in "Image", with: @butterfly.image
    fill_in "Name", with: @butterfly.name
    click_on "Create Butterfly"

    assert_text "Butterfly was successfully created"
    click_on "Back"
  end

  test "updating a Butterfly" do
    visit butterflies_url
    click_on "Edit", match: :first

    fill_in "Family", with: @butterfly.family
    fill_in "Image", with: @butterfly.image
    fill_in "Name", with: @butterfly.name
    click_on "Update Butterfly"

    assert_text "Butterfly was successfully updated"
    click_on "Back"
  end

  test "destroying a Butterfly" do
    visit butterflies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Butterfly was successfully destroyed"
  end
end
