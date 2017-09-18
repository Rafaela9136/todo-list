class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title, :presence => true
      t.text   :description
      t.string :status, :presence => true
      t.timestamps
    end
  end
end
