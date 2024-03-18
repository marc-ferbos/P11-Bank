import React from "react";

function FeatureItem({ title, description, icon, iconalt }) {
    return (
        <div className="feature-item">
                        <img
                            src={icon}
                            alt={iconalt}
                            className="feature-icon"
                        />
                        <h3 className="feature-item-title">
                            {title}
                        </h3>
                        <p>
                            {description}
                        </p>
                    </div>
    );
}

export default FeatureItem;