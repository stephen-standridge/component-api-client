class CreateLayouts < ActiveRecord::Migration[5.0]
  def change
    create_table :layouts do |t|
    	t.string :slug, index: true
    	t.string :layout_type
    	t.references :view
    	
      t.timestamps
    end
  end
end
