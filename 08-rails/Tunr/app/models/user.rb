# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#

class User < ApplicationRecord
  has_secure_password

  # Validations -- see the Rails Guide
  validates :email, :presence => true, :uniqueness => true

  has_many :mixtapes
end
