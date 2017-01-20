# == Schema Information
#
# Table name: views
#
#  id           :integer          not null, primary key
#  view_type    :string
#  view_options :json
#  line_id      :integer
#  slug         :string
#  title        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryGirl.define do
  factory :view do
    slug "MyString"
  end
end