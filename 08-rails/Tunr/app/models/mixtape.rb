# == Schema Information
#
# Table name: mixtapes
#
#  id         :bigint           not null, primary key
#  title      :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Mixtape < ApplicationRecord
  has_and_belongs_to_many :songs
  belongs_to :user, :optional => true
end
