class CreateXmlModels < ActiveRecord::Migration
  def change
    create_table :xml_models do |t|

      t.timestamps null: false
    end
  end
end
