import React from "react";
import "../css/taxform.css";

const TaxForm2 = () => {
  return (
    <div className="form-container">
      {/* Existing Fields */}
      <div className="form-group">
        <label>4. Tax Number </label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>5. To the tax office</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>6. If you change your place of residence: previous tax office</label>
        <input type="text" />
      </div>

      <h2>General Information</h2>
      <div className="form-group">
        <label>7. Telephone inquiries during the day at</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>8i. Identification number (ID number)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>8ii. Birth date</label>
        <input type="date" />
      </div>
      <div className="form-group">
        <label>9. Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>10. First name</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>18i. Married / Civil partnership established since</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18ii. Widowed since</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18iii. Divorced / Civil partnership annulled since</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>18iv. Permanently separated since</label>
        <input type="text" />
      </div>

      {/* 🔄 New Fields 19 to 28 inserted here */}
      <h2>Only in the case of joint taxation: Wife or person B (spouse B / Life partner B according to the LPartG)</h2>
      <div className="form-group">
        <label>19. ID Number</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>20. Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>21. First name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>22. Title, academic degree</label>
        <input type="text" />
      </div>

      {/* Address Details if Different */}
      <p><strong>Please only fill in the lines 23 to 27 if the address details differ from lines 12 to 16.</strong></p>
      <div className="form-group">
        <label>23. Street</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>24. House number</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>House number suffix</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Address supplement</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>25i. Zip code (domestic)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>25ii. Zip code (abroad)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>26. Place of residence</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>27. State (if address abroad)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>28. Practiced profession</label>
        <input type="text" />
      </div>

      {/* 🏦 Bank Details Section (Kept the same) */}
      <h2>Bank Details</h2>
      <div className="form-group">
        <label>31. IBAN (domestic financial institution)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>32. IBAN (foreign financial institution)</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>33. BIC to line 32</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>34. Name (in case of assignment, please submit official assignment form)</label>
        <input type="text" />
      </div>

      {/* Submit Button */}
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default TaxForm2;
